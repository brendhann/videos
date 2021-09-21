class PagesController < ApplicationController

    def episodes
        @episodes = Course.first.episodes

        render json: { data: @episodes }
    end
end
