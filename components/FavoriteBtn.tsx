"use client"
import { favoriteFile } from '@/lib/actions/file.actions';
import { usePathname } from 'next/navigation';
import { FaHeart, FaRegHeart } from 'react-icons/fa';


interface FavoriteBtnProps {
  isFavorite: boolean;
  fileId: string;
}
const FavoriteBtn = ({ isFavorite, fileId }: FavoriteBtnProps) => {
  const path = usePathname();

  const handleFileFovorite = async () => {
    await favoriteFile({ fileId, path, isFavorite: !isFavorite })
  }

  return (
    <div className="flex items-center justify-end cursor-pointer">
      <div className="w-[max-content]" onClick={handleFileFovorite}>
        {isFavorite ?
          <FaHeart size={24} className="text-red" /> :
          <FaRegHeart size={24} className="text-gray-400 hover:text-red" />
        }
      </div>
    </div>
  )
}

export default FavoriteBtn