class Condenser
  def contract(string)
    open = 0
    array = string.split(/[\n]/)
    num = array.length - 1
    last = num - 1 

    (0..num).each do |i| 
      if i == 0
        array[i] = array[i].sub(/\|/,'<a data-opens='"'#{open}'"'>')
        array[i] = array[i].sub(/\|/,"</a>")
        open += 1
      elsif i == last
        array[i] = '<span data-openedby='"'#{open - 1}'"'>' + array[i]
        array[i] = array[i].sub(/\|/,'<a data-opens='"'finished'"'>')
        array[i] = array[i].sub(/\|/,"</a>")
        array[i] = array[i] + "</span>"
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