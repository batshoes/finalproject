class Condenser
  def contract(string)
    open = 0
    array = string.split(/[\n]/)
    num = array.length - 1
    second_last = num - 1 

    (0..num).each do |i| 
      n = i - 1

      if i == 0
        array[i] = array[i].sub(/\|/,'<a data-opens='"'#{open}'"'>')
        array[i] = array[i].sub(/\|/,"</a>")
        open += 1
      elsif i == second_last
        if array[second_last] == "\r"
          array[i] = array[i].sub("\r", '</br><br>')
          array[n] = array[n].sub('<a data-opens='"'#{open - 1}'"'>','<a data-opens='"'finished'"'>')
        else
          array[i] = '<span data-openedby='"'#{open - 1}'"'>' + array[i]
          array[i] = array[i].sub(/\|/,'<a data-opens='"'finished'"'>')
          array[i] = array[i].sub(/\|/,"</a>")
          array[i] = array[i] + "</span>"
        end
      elsif array[i] === "\r" 
        array[i] = array[i].sub("\r", '</br><br>')
      elsif i == num
        array[i] = '<span data-openedby='"'finished'"'>' + array[i]
        array[i] = array[i] + "</span>"
      else
        array[i] = '<span data-openedby='"'#{open - 1}'"'>' + array[i]
        array[i] = array[i].sub(/\|/,'<a data-opens='"'#{open}'"'>')
        array[i] = array[i].sub(/\|/,"</a>")
        array[i] = array[i] + "</span>"
        open += 1
      end
    end
    array.join(' ')
  end

end