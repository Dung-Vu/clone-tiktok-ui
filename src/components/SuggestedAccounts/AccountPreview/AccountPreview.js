import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7328390904136335378.jpeg?lk3s=a5d48078&nonce=95653&refresh_token=109521083320b64deb9649016cf11ea4&x-expires=1723284000&x-signature=icnDyXI%2FDW9CkW8Ib1RI%2FaYAufk%3D&shp=a5d48078&shcp=81f88b70"
                    alt=""
                />
                <div className={cx('button')}>
                    <Button primary>Follow</Button>
                </div>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>dinhdung521</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Vũ Đình Dũng</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>13.5M</strong>
                    <span className={cx('label')}>Follow</span>
                    <strong className={cx('value')}>2001M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
