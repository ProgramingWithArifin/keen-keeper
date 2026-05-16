import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Friend = ({friend}) => {
    const statusColor=(status)=>{
        if(status=="on-track"){
            return 'tag-green'
        }
        if(status=="almost due"){
            return 'tag-yellow'
        }
        if(status=="overdue"){
            return 'tag-red'
        }
    }
    return (
        <Link href={`/friends/${friend.id}`} className='min-w-55 max-w-60 bg-white flex flex-col items-center gap-1 p-5 rounded-xl'>
            <Image src={friend.picture} alt='friend' width={80} height={80} className='rounded-full'>

            </Image>
            <h2 className='text-xl'>    
                {friend.name}
            </h2>
            <p className='text-gray-600'>{friend.days_since_contact}d ago</p>
            <span className='tag-info'>{friend.tags[0]}</span>
            <span className={statusColor(friend.status)}>{friend.status}</span>
        </Link>
    );
};

export default Friend;