class Solution:
    def reverseWords(self, s:str) -> str:
        sub_strings = s.split()
        new_string = ""
        for i in range(len(sub_strings)):
            new_sub_str = ""
            new_sub = list(sub_strings[i])
            new_sub.reverse()
            new_sub_str += "".join(new_sub)
            if i != len(sub_strings) - 1:
               new_string += new_sub_str + " "
            else:
                new_string += new_sub_str
        return new_string
