#!/usr/bin/env ruby -w
require 'rszr'
require 'fastimage'
require 'json'
require 'byebug'
require 'fileutils'

MAX_SIZE = 1600
MAX_THUMBNAIL_SIZE = 600

raise ArgumentError.new("You need to pass the images directory") if !ARGV[0]

def create_thumbnail(folder_name)
  path = "public/#{folder_name}"
  path_for_small = "#{path}/#{"small"}"
  filenames = Dir.entries(path).reject {|s| [".", "..", ".DS_Store", "small"].include?(s)}
  
  filenames.sort.each do |filename|
    vertical = false
    image = Rszr::Image.load("#{path}/#{filename}")
    width = image.dimensions[0]
    height = image.dimensions[1]
    vertical = true if height > width
    
    if (width < MAX_SIZE || height < MAX_SIZE)
      
    end

    vertical ? image.resize!(:auto, MAX_THUMBNAIL_SIZE) : image.resize!(MAX_THUMBNAIL_SIZE, :auto)
    FileUtils.mkdir_p path_for_small
    image.save("#{path_for_small}/#{filename}")
  end
end

def generate_gallery_items(folder_name)
  path = "public/#{folder_name}"
  path_for_url = "#{folder_name}"
  filenames = Dir.entries(path).reject {|s| [".", "..", ".DS_Store", "small"].include?(s)}
  
  gallery_items = []
  filenames.sort.each do |filename|
    size = FastImage.size("#{path}/#{filename}")
    gallery_items << { 
      largeURL: "#{path_for_url}/#{filename}",
      thumbnailURL: "#{path_for_url}/small/#{filename}",
      width: size[0],
      height: size[1],
      description: folder_name
    }
  end

  gallery_items.to_json
end

def copy_to_clipboard(input)
  str = input.to_s
  IO.popen('pbcopy', 'w') { |f| f << str }
  str
end

create_thumbnail(ARGV[0])
copy_to_clipboard(generate_gallery_items(ARGV[0]))

# ./create_thumbnail_and_print_gallery_json.rb realizzazioni/piazzole
