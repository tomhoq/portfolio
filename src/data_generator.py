file_path = "./resume_data/data.js"

colors = ["'#E9F4ED'", "'#DFF1E5'", "'#DFF1E5'", "'#D7ECDE'", "'#CCE4D4'", "'#C5E0CE'", 
          "'#C5E0CE'", "'#B9D3C2'", "'#BBD8C5'", "'#A1CDAF'", "'#97C3A5'", "'#81C597'",
          "'#89C69D'", "'#71BA89'", "'#5CBF7D'"]

widths = ["'204px'", "'180px'", "'200px'", "'215px'", "'190px'", "'210px'", "'190px'",
          "'200px'", "'200px'", "'210px'", "'215px'", "'170px'", "'210px'", "'220px'",
            "'165px'"]

key_words = ["date:", "title:", "clickable:", "info:", "location:", "at:",
              "color:", "left:", "width:"]

with open(file_path, 'r') as file:
    data = file.read()

    words = data.split()
    words[3]= "\n\t" + words[3]
    j = 0
    for i in range(len(words)):
        if words[i] == "width:":
            words[i + 1] = widths[j] + ","

        if words[i] == "color:":
            words[i + 1] = colors[j] + ","
            j+=1
        if words[i].endswith(','):
            if i+1 < len(words) and not words[i+1].endswith(','):
                words[i] += '\n'
            elif i+1 == len(words):
                words[i] += '\n'
        if words[i] in key_words:
            words[i] = "\t\t" + words[i]
        if words[i] == "\t\ttitle:":
            words[i] = '\n' + words[i]

    # Join the words back into a string
    new_data = ' '.join(words)

    # Write the modified content back to the file
with open(file_path, 'w') as file:
    file.write(new_data)
