class Condenser
  def censor
    
  end

  def contract(string)
    open = 0
    openby = open - 1
    array = string.split(/[\n]/)
    num = array.length - 1

    (0..num).each do |i| 
      if i == 0
        array[i] = array[i].sub(/\|/,'<a data-opens='"'#{open}'"'>')
        array[i] = array[i].sub(/\|/,"</a>")
        open += 1
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