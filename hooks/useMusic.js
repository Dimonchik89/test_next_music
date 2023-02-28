import { setSongIsDownloading } from "../store/actualMusics"
import { handleOpenModal } from "../store/modal"
import { downloadMusic } from '../api/downloadApi';
import { useDispatch } from 'react-redux';

const useMusic = () => {
    const dispatch = useDispatch()

    const handleDownload = (e, music) => {
        dispatch(setSongIsDownloading(music))
        dispatch(handleOpenModal())
        downloadMusic({e, music})
    }

    return { handleDownload }
}

export default useMusic