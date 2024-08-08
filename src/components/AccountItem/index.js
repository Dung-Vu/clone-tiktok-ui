import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ children }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7328390904136335378.jpeg?lk3s=a5d48078&nonce=95653&refresh_token=109521083320b64deb9649016cf11ea4&x-expires=1723284000&x-signature=icnDyXI%2FDW9CkW8Ib1RI%2FaYAufk%3D&shp=a5d48078&shcp=81f88b70"
                alt="DungVu"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Vu Dinh Dung</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('usernames')}>dinhdung521</span>
            </div>
        </div>
    );
}

export default AccountItem;
