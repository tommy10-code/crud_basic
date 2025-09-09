class DemoController < ApplicationController
  def frames
    session[:items] ||= []    # セッションに配列
    @items = session[:items]
  end

  def create
    session[:items] ||= []
    content = params.require(:item).permit(:content)[:content].to_s.strip
    return redirect_to "/demo/frames" if content.blank?

    @item = content
    session[:items].append(@item) # 先頭に追加（新しい順）

    respond_to do |format|
      format.turbo_stream          # ← Turbo Streams で部分更新
      format.html { redirect_to "/demo/frames" }
    end
  end
end
