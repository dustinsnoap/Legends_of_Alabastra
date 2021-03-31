import cv2, math, string, numpy
image = cv2.imread('test_resize.png', -1)
image = numpy.array(image).tolist()
digits = string.digits + string.ascii_letters

#generic helper functions
def dictToArr(dictionary):
    arr = [None]*len(dictionary)
    for d in dictionary:
        arr[dictionary[d]-1] = d
    return arr

def pixelsPerChar(base):
    if base == 2: return 8
    if base < 13: return 4
    if base < 180: return 2
    return 1

def getHex(color):
    r = str(hex(color[2]).split('x')[-1])
    if len(r) == 1: r = '0'+r
    g = str(hex(color[1]).split('x')[-1])
    if len(g) == 1: g = '0'+g
    b = str(hex(color[0]).split('x')[-1])
    if len(b) == 1: b = '0'+b
    return r+g+b  

def isTransparent(color):
    if len(color) == 3: return False
    if len(color) == 4 and color[3] == 255: return False
    return True

def fillImage(image, tile_size=8):
    rows = len(image)
    cols = len(image[0])
    rows_needed = rows//tile_size
    cols_needed = cols//tile_size
    #fill columns
    for row in image:
        for col in range(cols_needed): row.append([0,0,0,0])
    #fill rows
    empty_row = []
    for col in range(cols+cols_needed): empty_row.append([0,0,0,0])
    for row in range(rows_needed): image.append(empty_row)

def convertImageToHex(image):
    hex_image = list()
    for row in image:
        hex_row = list()
        for col in row:
            if isTransparent(col): hex_row.append(0)
            else: hex_row.append(getHex(col))
        hex_image.append(hex_row)
    return hex_image

#worker helper functions
def createColorDict(image):
    color_dict = dict()
    counter = 1
    for row in image:
        for col in row:
            if col != 0 and col not in color_dict:
                color_dict[col] = counter
                counter += 1
    return color_dict

def createTileRow(image_row, colors, tile_size):
    tiles = []
    for t in range(len(image_row[0])//tile_size): tiles.append([])
    for i, row in enumerate(image_row):
        tile_row = list()
        for col_num, col in enumerate(row):
            color_index = 0 if col == 0 else colors[col]
            tile_row.append(color_index)
            if len(tile_row) == tile_size:
                index = col_num // tile_size
                tiles[index].append(tile_row)
                tile_row = []
    return tiles

def compressTile(tile, base):
    pixels_per_char = pixelsPerChar(base)
    compressed_tile = ''
    for row in tile:
        for i in range(0, 8, pixels_per_char):
            group = row[i:i+pixels_per_char]
            string = ''
            for el in group: string += str(el)
            compressed_tile += chr(int(string, base)+42)
    return compressed_tile

def compressTiles(tiled_image, colors):
    base = len(colors)+1
    tiles = list()
    for row in tiled_image:
        tile_row = list()
        for tile in row:
            compressed_tile = compressTile(tile, base)
            tile_row.append(compressed_tile)
        tiles.append(tile_row)
    return tiles

def convertToTiles(image, colors, tile_size):
    converted = []
    for row_num in range(0, len(image), tile_size):
        tile = createTileRow(image[row_num:row_num+tile_size], colors, tile_size)
        converted.append(tile)
    return converted

#worker functions
def createTileset(compressed_tiles, tile_size, compressed_factor):
    tiledict = dict()
    counter = 1
    for row in compressed_tiles:
        for tile in row:
            if tile == '*'*(tile_size**2//4): continue
            if tile not in tiledict:
                tiledict[tile] = counter
                counter += 1
    return tiledict

def createBitmap(tiled_image, tiledict, base):
    bitmap = list()
    for tile_row in tiled_image:
        bit_row = list()
        for tile in tile_row:
            tile = compressTile(tile, base)
            if tile in tiledict:
                bit_row.append(tiledict[tile])
            else:
                bit_row.append(0)
        bitmap.append(bit_row)
    return bitmap

def convert(image, tile_size=8):
    fillImage(image)
    image = convertImageToHex(image)
    colors = createColorDict(image)
    compressed_factor = pixelsPerChar(len(colors)+1)
    tiled_image = convertToTiles(image, colors, tile_size)
    compressed_tiles = compressTiles(tiled_image, colors)
    tiledict = createTileset(compressed_tiles, tile_size, compressed_factor)
    tileset = dictToArr(tiledict)
    bitmap = createBitmap(tiled_image, tiledict, compressed_factor)
    image = {
        'bitmap': bitmap,
        'tileset': tileset,
        'compressed_factor': compressed_factor,
        'colors': colors
    }
    return image


#run function
newimage = convert(image, 8)
for m in newimage: print(m, newimage[m])