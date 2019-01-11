class SearchController < ApplicationController
  def results
    if params[:search_field].present?
      @res = Stuff.search_by_title(params[:search_field]).all
    end
  end
end
