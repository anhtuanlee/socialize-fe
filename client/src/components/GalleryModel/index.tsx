import PictureGrid from '@/containers/Gallery';
import { cn } from '@/utils';

function GalleryModel({ data, className }: { data: TDataBlob[] | string[]; className?: string }) {
  return (
    <div className={cn(className)}>
      <PictureGrid images={data} />
    </div>
  );
}

export default GalleryModel;
