import React from 'react';
import PropTypes from 'prop-types';

const CreditCard = ({
    className, name, apr, balanceTransfer, purchaseOffer, creditAvailable,
}) => (
    <div className={`card ${className}`}>
        <h3>{name}</h3>
        <ul>
            <li id="apr">{`APR: ${apr}%`}</li>
            <li id="balance">{`Balance Transfer Offer Duration: ${balanceTransfer} Months`}</li>
            <li id="purchase">{`Purchase Offer Duration: ${purchaseOffer} Months`}</li>
            <li id="credit">{`Credit Available: £${creditAvailable}`}</li>
        </ul>
    </div>
);

CreditCard.propTypes = {
    className: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    apr: PropTypes.number.isRequired,
    balanceTransfer: PropTypes.number.isRequired,
    purchaseOffer: PropTypes.number.isRequired,
    creditAvailable: PropTypes.number.isRequired,
};

export default CreditCard;
