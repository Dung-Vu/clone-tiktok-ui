import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[500, 0]} offset={[-18, 0]} placement="bottom" render={renderPreview}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/7328390904136335378.jpeg?lk3s=a5d48078&nonce=95653&refresh_token=109521083320b64deb9649016cf11ea4&x-expires=1723284000&x-signature=icnDyXI%2FDW9CkW8Ib1RI%2FaYAufk%3D&shp=a5d48078&shcp=81f88b70"
                        alt=""
                    />
                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>dinhdung521</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>Vũ Đình Dũng</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};
export default AccountItem;
