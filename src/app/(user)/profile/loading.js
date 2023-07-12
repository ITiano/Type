import Skeleton from '@components/common/Skeleton';
import React from 'react';

const PageLoading = () => {
    return (
        <div className='mt-layout 2xs:p-10 md:p-12 mb-8 m-layout'>
            <Skeleton height={112} className='mb-4'/>
        </div>
    );
};

export default PageLoading;