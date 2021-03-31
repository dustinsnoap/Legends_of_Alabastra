import cv2, math, string
image = cv2.imread('test.png', -1)
digs = string.digits + string.ascii_letters

#helper function
def pixelsPerChar(base):
    if base == 2: return 8
    if base < 13: return 4
    if base < 180: return 2
    return 1

def compressTile(tile, base):
    base += 1
    pixels_per_char = pixelsPerChar(base)
    print('base', base, pixels_per_char)
    compressed_tile = ''
    for row in tile:
        for i in range(0, 8, pixels_per_char):
            group = row[i:i+pixels_per_char]
            print('g1', group)
            string = ''
            for el in group: string += str(el)
            print('g2', string)
            print('g3', chr(int(string, base)+42))
            compressed_tile += chr(int(string, base)+42)
    return compressed_tile

def get_color(color):
    r = str(hex(color[2]).split('x')[-1])
    if len(r) == 1: r = '0'+r
    g = str(hex(color[1]).split('x')[-1])
    if len(g) == 1: g = '0'+g
    b = str(hex(color[0]).split('x')[-1])
    if len(b) == 1: b = '0'+b
    return r+g+b  

def isnottrans(color):
    if len(color) == 3: return True
    if len(color) == 4 and color[3] == 255: return True
    return False

def slice_matrix(matrix, start_x, start_y, size=2, fill_empty_space=True):
    #slice matrix
    new_matrix = matrix[start_y*size:start_y*size+size]
    new_matrix = list(map(lambda x: x[start_x*size: start_x*size+size], new_matrix))
    #fill in empty space
    # if fill_empty_space:
    #     print('empty row')
    #     new_matrix = list(map(lambda col: col+[0]*(size-len(col)), new_matrix))
    #     for empty_row in range(size-len(new_matrix)):
    #         new_matrix.append([0]*size)
    return new_matrix

#create color array
colorset = dict()
counter = 1
for row, i in enumerate(image):
    for col, j in enumerate(i):
        #only add if color isn't transparent
        if isnottrans(image[row][col]):
            color = get_color(image[row][col])
            if color not in colorset:
                colorset[color] = counter
                counter += 1
colorarr = list(colorset)
print('cs', colordict)
print('ca', colorarr)

#get color count
colorcount = len(colorarr)

#create color dictionary for bitmap ref
colordict = {}
for i, color in enumerate(colorarr): colordict[color] = i
print('cd', colordict)

# create tile
def create_tile(matrix, colors):
    tile = []
    for row in matrix:
        tile_row = []
        for col in row:
            if isnottrans(col):
                temp = get_color(col)
                print('0t', temp)
                temp = colors[get_color(col)]+1
                print('1t', temp)
                tile_row.append(colors[get_color(col)]+1)
            else: tile_row.append(0)
        tile.append(tile_row)
    print('2t', tile)
    return tile
        

def create_tileset(image, colors, size=8):
    tiles = set()
    for row in range(math.ceil(len(image)/8)):
        for col in range(math.ceil(len(image[0])/8)):
            tile = slice_matrix(image, row, col, 8)
            print('t1', tile)
            tile = create_tile(tile, colors)
            print('t2', tile)
            compressed_tile = compressTile(tile, len(colors))
            print('t3', compressed_tile)
            if compressed_tile == '****************': continue
            tiles.add(str(compressed_tile))
    tileset = list(tiles)
    return tileset

def create_bitmap(image, tileset, colors, size=8):
    #create a tile dictionary for reference
    tiledict = dict()
    counter = 1
    for tile in tileset:
        tiledict[tile] = counter
        counter += 1
    print('td', tiledict)
    
    bitmap = []
    for row in range(math.ceil(len(image)/8)):
        bitmap_row = []
        for col in range(math.ceil(len(image[0])/8)):
            tile = slice_matrix(image, row, col, 8)
            # print('t1', tile)
            tile = create_tile(tile, colors)
            # print('t2', tile)
            compressed_tile = compressTile(tile, len(colors))
            print(compressed_tile)
            if compressed_tile == '****************': bitmap_row.append(0)
            else:
                tile_index = tiledict[compressed_tile]
                bitmap_row.append(tile_index)
        bitmap.append(bitmap_row)
    return bitmap    



# test = [[1,2,3,4],[5,6,7,8],[9,0,1,2],[3,4,5,6]]
# temp = slice_matrix(test, 1, 1, 3)
# print(temp)

tileset = create_tileset(image, colordict)
bitmap = create_bitmap(image, tileset, colordict)
# print(tileset, 'length', len(tileset))
print('bitmap', bitmap)
print('tileset', tileset)
print('colors', colordict)

print('-----------')
print('1:', chr(int('1111',4)+42), int('1111', 4)+42)
print('2:', chr(int('2222',4)+42), int('2222', 4)+42)
print('3:', chr(int('3333',4)+42), int('3333', 4)+42)

#transparent isn't 0
#blue and green seem to be the same tile