import Button from '@/components/Button';
import { IconClose } from '@/components/IconSvg';
import ImageCustom from '@/components/ImageCustom';
import { useStore } from '@/stores/stores';
import React from 'react';

function ModelSelectImgCustom() {
  const { listImgViews, listSelectImg, setListImgViews, setListSelectImg } = useStore();

  const handleDeleteImages = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    e.preventDefault();

    const listUpdateViews = [...(listImgViews as TDataBlob[])];
    const listUpdateSelects: { [x: number]: File } = { ...listSelectImg };
    const newListSelects = Object.values(listUpdateSelects!).filter((item) => item.name !== name);
    const fortmatNewList: Record<number, File> = newListSelects.reduce(
      (acc, currentElement, index) => {
        acc[index + 1] = currentElement;
        return acc;
      },
      {} as Record<number, File>
    );
    const newListViews = listUpdateViews.filter((item) => item.name !== name);
    setListImgViews(newListViews);
    setListSelectImg(fortmatNewList as FileList);
  };
  console.log(listSelectImg);

  return (
    <div className="h-full overflow-scroll ">
      <div className="flex flex-col">
        {listImgViews?.map((item) => {
          return (
            <div className={`aspect-2/75 w-full py-2 px-4`}>
              <figure
                className="relative flex items-center justify-center w-auto h-full overflow-hidden rounded-2xl"
                key={item.name}
              >
                <Button
                  Icons={IconClose}
                  onClick={(e) => handleDeleteImages(e, item.name)}
                  type="icon"
                  classNames="absolute right-5 top-5 shadow-md"
                />

                <div
                  className="absolute inset-0 -z-10 blur-md"
                  style={{ backgroundImage: `url('${item.url}')` }}
                ></div>
                <ImageCustom
                  className="absolute z-10 !w-auto mx-auto"
                  type="default"
                  src={item.url}
                  key={item.name}
                  alt={`img`}
                />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ModelSelectImgCustom;
