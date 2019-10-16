# Also known as REFACTOR #3
require_relative './item_types/normal'
require_relative './item_types/aged_brie'
require_relative './item_types/backstage_pass'
require_relative './item_types/conjured'

class GildedRose
  attr_reader :name, :days_remaining, :quality

  def initialize(name:, days_remaining:, quality:)
    @name, @days_remaining, @quality = name, days_remaining, quality
  end

  def tick
    case name
    when 'Normal Item'
      normal_tick
    when 'Aged Brie'
      brie_tick
    when 'Backstage passes to a TAFKAL80ETC concert'
      backstage_tick
    when 'Conjured Mana Cake'
      conjured_tick
    when 'Sulfuras, Hand of Ragnaros'
      return
    end
    
  end

  def sulfuras_tick # Default behavior (do nothing) to be inherited by Sulfuras
  end

end
