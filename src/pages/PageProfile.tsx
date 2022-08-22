import React from 'react';

function PageProfile() {
    return (
        <div className='grid gap-4 md:grid-cols-3 grid-rows-1 max-w-full'>
            <div className='card col bg-neutral border border-white/10 text-neutral-content shadow-xl'>
                <ul className="menu menu-compact">
                    <li>
                        <div className='flex gap-4'>
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://thispersondoesnotexist.com/image"/>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <span>Gerard Wagenaar</span>
                                <span className='text-xs opacity-50'>g.wagenaar@gmail.com</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a>
                            <i className='material-symbols-rounded text-base ml-3'>edit</i> Profiel aanpassen
                        </a>
                    </li>
                    <li>
                        <a>
                            <i className='material-symbols-rounded text-base ml-3'>inbox</i> Berichten
                        </a>
                    </li>
                </ul>
            </div>
            <div className='card col-span-2 bg-base-200/20 border border-white/10 h-full'></div>
        </div>
    );
}

export default PageProfile;