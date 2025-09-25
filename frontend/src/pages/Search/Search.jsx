import "./Search.css";

// hooks 
import { useQuery } from "../../hooks/useQuery";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResetComponentMessage } from "../../hooks/useResetComponentMessage";

// components
import LikeContainer from "../../components/PhotoItem";
import PhotoItem from "../../components/PhotoItem";
import { Link } from "react-router-dom";

// redux 
import { searchPhotos, like } from "../../slices/photoSlice";

const Search = () => {

    const query = useQuery();
    const search = query.get("q");

    const dispatch = useDispatch();

    const resetMessage = useResetComponentMessage(dispatch);

    const { user } = useSelector(state => state.auth);
    const { photos, loading } = useSelector(state => state.photo)

    // load photos 
    useEffect(() => {
        dispatch(searchPhotos(search));
    }, [dispatch, search]);

    // like a photo 
    const handleLike = (photo) => {
        dispatch(like(photo._id))

        resetMessage()
    }

    if (loading) {
        return <p>carregando...</p>
    }

    return (
        <div id="search">
            <h2>Você esta buscando por: {search}</h2>
            {photos && photos.map((photo) => (
                <div key={photo._id}>
                    <PhotoItem photo={photo} />
                    <LikeContainer photo={photo} user={user} handleLike={handleLike} />
                    <Link className="btn" to={`/photos/${photo._id}`}>ver mais</Link>
                </div>
            ))}
            {photos && photos.length === 0 && (
                <h2 className="no_photos">
                    Não foram encontrados resultados...
                </h2>
            )}
        </div>
    )
}

export default Search
