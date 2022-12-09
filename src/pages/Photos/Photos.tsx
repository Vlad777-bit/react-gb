import { FC, useEffect, useState } from 'react';
import { PhotoServiceDto } from '../../api/PhotoService.dto';
import { useFetching } from '../../hooks/useFetching';
import { PhotosProps } from './Photos.props';

interface PhotoInterface {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const Photos: FC<PhotosProps> = () => {
  const [photos, setPhotos] = useState<PhotoInterface[]>([]);

  const { fetching, isLoading, error } = useFetching(async (limit: number) => {
    const response = await PhotoServiceDto.getAll(limit);

    setPhotos(await response.json());
  });

  const reload = () => {
    fetching(15);
  };

  useEffect(() => {
    fetching(15);
  }, []);

  return (
    <div>
      <h2>Фотографии</h2>
      <button onClick={reload}>Послать запрос ещё раз</button>
      {isLoading && <p>Идёт загрузка...</p>}
      {error && <p>{error}</p>}
      <div>
        {photos.map((photo) => (
          <a key={photo.id} href={photo.url} target="blank">
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              title={photo.title}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
