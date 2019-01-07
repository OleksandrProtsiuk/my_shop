module ApplicationHelper

  def categories
    Category.all
  end

  def category_names_ids
    list = []
    Category.all.each do |element|
      list.append([element.category, element.id])
    end
    @list = list
  end

  def titles
    list = []
    Stuff.all.each do |element|
      list.append(element.title)
    end
    @list = list
  end
end
