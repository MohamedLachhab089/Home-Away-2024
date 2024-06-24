'use client';

import {PuffLoader} from 'react-spinners';

const Loader = () => {
    return (
        <div className="h-[70vh] flex flex-col justify-center items-center">
            <PuffLoader size={100} color="#40E0D0" loading={true} />
        </div>
    )
}
export default Loader;