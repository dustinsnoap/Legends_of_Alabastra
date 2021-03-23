# def checkBlanagrams(word1, word2):
#     w1 = set(word1)
#     w2 = set(word2)
#     sorted_w1 = str(sorted(list(word1)))
#     sorted_w2 = str(sorted(list(word2)))
#     print(sorted_w1, sorted_w2)
#     diff = w1.difference(w2) or (w2).difference(w1)
#     if len(diff) == 1:
#         return True
#     if len(diff) == 0 and sorted_w1 == sorted_w2:
#         print('made it here')
#         for w in w1:
#             print(w, word1.count(w), word1.count(w) - word2.count(w))
#             if abs(word1.count(w) - word2.count(w)) == 1:
#                 return True  
#     return False

def checkBlanagrams(word1, word2):
    w1 = {}
    diff = 0
    for w in word1:
        if w not in w1:
            w1[w] = 1
        else:
            w1[w] += 1  
    for w in word2:
        if w in word1:
            w1[w] -= 1
            if w1[w] < 0: diff+= 1
        else: diff += 1
    if diff > 0: return True
    return False

test1 = checkBlanagrams('tangram', 'anagram')
test2 = checkBlanagrams('tangram', 'pangram')
test3 = checkBlanagrams('aba', 'bab')
test4 = checkBlanagrams('silent', 'listen')
print(test1)
print(test2)
print(test3)
print(test4)