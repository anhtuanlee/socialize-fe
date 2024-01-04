import Button from '@/components/Button';
import GalleryModel from '@/components/GalleryModel';
import { IconAddGallery, IconClose, IconEdit } from '@/components/IconSvg';
import Text from '@/components/Text';
import { helper } from '@/helper/core';
import { useStore } from '@/stores/stores';
import React from 'react';

function ModelSelectImg() {
  const {
    setIsSelectImg,
    setListSelectImg,
    listImgViews,
    setListImgViews,
    setIsOpenSelectCustomImg,
  } = useStore();

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const listRenderImg = await helper.convertFilestToBlob(e?.target.files as FileList);
    setListImgViews(listRenderImg);
    setListSelectImg(e?.target.files);
  };
  const handleOpenCustomSelectImg = (e: React.MouseEvent) => {
    setIsOpenSelectCustomImg(true);
  };

  return (
    <div className="relative  rounded-lg border-[1px] border-solid border-ashgray p-4 m-4 ">
      <Button
        Icons={IconClose}
        onClick={() => setIsSelectImg(false)}
        type="icon"
        classNames="absolute right-8 top-8 z-[1]"
      />
      {!listImgViews ? (
        <div className="w-full relative h-80 bg-[#f7f8fa] rounded-lg">
          <input
            onChange={(e) => handleOnChange(e)}
            hidden
            id="files_posts"
            formEncType="multipart/form-data"
            multiple
            accept="image/*,image/heif,image/heic,video/*,video/mp4,video/x-m4v,video/x-matroska,.mkv"
            type="file"
            name="files_posts"
          />
          <label
            htmlFor="files_posts"
            className="absolute flex flex-col items-center justify-center w-full h-full gap-4 -translate-x-1/2 -translate-y-1/2 cursor-pointer left-1/2 top-1/2"
          >
            <span className="absolute flex flex-col items-center justify-center pointer-events-none">
              <Button Icons={IconAddGallery} type="icon" typeButton="button" />

              <Text color="darkblack" variant="body_md__s">
                Chọn ảnh
              </Text>
            </span>
          </label>
        </div>
      ) : (
        <div className="relative">
          <Button
            onClick={(e) => handleOpenCustomSelectImg(e)}
            type="secondary"
            classNames="absolute left-4 top-8 !text-black"
            typeButton="button"
            Icons={IconEdit}
          >
            Chỉnh sửa
          </Button>
          <GalleryModel className="w-full h-full" data={listImgViews} />
        </div>
      )}
    </div>
  );
}

export default ModelSelectImg;
