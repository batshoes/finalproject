class Condenser

  def contract(string)
    count = 0
    array = string.split(/[\n]/)
    num = array.length - 1

    (0..num).each do |i|  
      array[i] = array[i].sub(/\|/,'<a data-opens='"'#{count}'"'>')
      array[i] = array[i].sub(/\|/,"</a>")
      count += 1
    end

  puts array
  puts "haaay"
  end

end