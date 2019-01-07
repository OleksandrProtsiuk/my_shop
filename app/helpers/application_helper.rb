module ApplicationHelper

  def categories
    Category.all
  end

  def titles
    list = []
    Stuff.all.each do |element|
      list.append(element.title)
    end
    @list = list
  end
end
