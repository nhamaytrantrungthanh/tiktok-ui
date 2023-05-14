import classNames from 'classnames/bind';
import { 
    faCircleQuestionMark,

    faEarthAsia,
    faMagnifyingGlass, 
    faSignIn, 
    faEllipsisVertical, 
    faCircleQuestion, 
    faKeyboard, 
    faCloudUpload,
    faMessage,

} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import config from './config';
import Button from '~/components/Button/Button'
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/popper/Menu/Menu';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import styles from './Searh.module.scss';
import Search from '../Search/Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ],
        },
    },

    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />
        title: 'Feedback and help',
        to: './feedback',
    },

    {
        icon: <FontAwesomeIcon icon={faKeyboard} />
        title: 'Keyboard shortcuts',

    },

];

function Header() {
    const currentUser = true;

    
    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:    
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: './@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: './coins',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: './Settings',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: './logout',
            separate: true,
        },
        ...MENU_ITEMS,
    ];

    return (
    <header className={cx('wrapper')}>
        <div className={cx('inner')}>
               <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Button>Click me!</Button>

                <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy delay={[0, 200]} content="Upload video" placement="bottom">

                            <button className={cx('action-btn')}>
                                <UploadIcon />
                                <MessageIcon />
                                <InboxIcon />
                                <SearchIcon />
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                <Button text>Upload</Button>
                <Button primary>Log in</Button>
                    </>
                )}    

                <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                    {currentUser ? (
                        <Image 
                            className={cx('user-avatar')}
                            src="https://instagram.fsgn4-1.fna.fbcdn.net/v/t51.2885-15/345820012_1017088792661933_516288959310680335_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fsgn4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pW0ibCuo7IgAX8_p0f3&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzEwMDMxNTgwMDM3OTUyNzQyNQ%3D%3D.2-ccb7-5&oh=00_AfD0ldAIK7VwykN0c48okjt0HsODop6alzicOgHQFThFsg&oe=6462C778&_nc_sid=6136e7"
                            alt="Nguyen Van A"
                            fallback="https://instagram.fsgn4-1.fna.fbcdn.net/v/t51.2885-15/345820012_1017088792661933_516288959310680335_n.jpg?stp=dst-jpg_e35_p1080x1080&_nc_ht=instagram.fsgn4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=pW0ibCuo7IgAX8_p0f3&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=MzEwMDMxNTgwMDM3OTUyNzQyNQ%3D%3D.2-ccb7-5&oh=00_AfD0ldAIK7VwykN0c48okjt0HsODop6alzicOgHQFThFsg&oe=6462C778&_nc_sid=6136e7"
                        />
                    ) : (    
                    <button className={cx('more-btn')}>
                        <FontawesomeIcon icon={faEllipsisVertical} />
                    </button>
                    )}
                </Menu>

            </div>
        </div>
    </header>
 );
}

export default Header;