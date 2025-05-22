from typing import List

class Solution:
    def flippingAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        new_image = []
        for l in image:
            l.reverse()
            for i in range(len(l)):
                l[i] = 1 - l[i]
            new_image.append(l)
        return new_image