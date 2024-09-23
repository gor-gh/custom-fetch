import {FC, memo, useEffect, useState} from "react";

interface ISkeletonImageProps {
    url: string;
    width?: number;
    height?: number;
}

const SkeletonImage: FC<ISkeletonImageProps> = ({url, width, height}) => {
    const [imageUrl, setImageUrl] = useState<string>('');

    useEffect(() => {
        const fetchAndSetImage = async () => {
            const response = await fetch(url);
            const urlBlob = await response.blob();

            const imgUrl = URL.createObjectURL(urlBlob);

            setImageUrl(imgUrl);
        };

        fetchAndSetImage();

        return () => URL.revokeObjectURL(imageUrl);
    }, [url, width, height]);

    return (
        <div className="skeleton-wrapper" style={{width, height}}>
            {!imageUrl ? (
                <div className="loader">
                    <span>Image is loading...</span>
                </div>
            ) : (
                <img className='image' src={imageUrl} alt="Problem loading the image" />
            )}
        </div>
    )
};

export default memo(SkeletonImage);