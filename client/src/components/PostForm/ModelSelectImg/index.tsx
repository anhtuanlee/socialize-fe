import { IconAdd, IconClose } from '@/components/IconSvg';
import ImageCustom from '@/components/ImageCustom';
import Text from '@/components/Text';
import { useStore } from '@/stores/stores';
import React, { useState } from 'react';

function ModelSelectImg() {
  const { setIsSelectImg, setListSelectImg, listSelectImg } = useStore();
  function handleOnChange(e: any) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setListSelectImg(onLoadEvent!.target!.result as string);
      //   setUploadData(undefined);
    };

    reader.readAsDataURL(e.target.files[0]);
  }
  //   console.log(listSelectImg);

  return (
    <div className="w-full px-2 h-80 mb-40 ">
      <div className="w-full relative h-full bg-[#f7f8fa] rounded-lg">
        <input
          onChange={handleOnChange}
          hidden
          id="img"
          formEncType="multipart/form-data"
          multiple
          accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
          type="file"
          name="img"
        />
        <span
          onClick={() => setIsSelectImg(false)}
          className="absolute right-4 top-4 w-14 h-14 flex items-center justify-center rounded-full bg-white border-solid border-[1px] border-colgray"
        >
          <IconClose />
        </span>

        <label
          htmlFor="img"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4"
        >
          <Text color="darkblack" variant="body_md__b">
            Chọn Ảnh
          </Text>
          <IconAdd className="fill-ashgray" />
        </label>
        {/* <figure className="relative  -z-3  w-full h-full">
          <ImageCustom src={imgSrc as string} alt="s" type="default" />
        </figure> */}
      </div>
    </div>
  );
}

export default ModelSelectImg;
