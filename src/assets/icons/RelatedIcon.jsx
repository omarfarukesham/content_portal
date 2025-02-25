const RelatedIcon = ({ className }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className || 'fill-primary'}
    >
      <path
        d='M5.62533 17.4998C4.54199 17.4998 3.61144 17.1109 2.83366 16.3332C2.05588 15.5554 1.66699 14.6248 1.66699 13.5415C1.66699 12.6109 1.93783 11.7984 2.47949 11.104C3.02116 10.4096 3.72255 9.95123 4.58366 9.729V11.0415C4.09755 11.2359 3.69824 11.5589 3.38574 12.0103C3.07324 12.4616 2.91699 12.9721 2.91699 13.5415C2.91699 14.2915 3.18088 14.9304 3.70866 15.4582C4.23644 15.9859 4.87533 16.2498 5.62533 16.2498C6.37533 16.2498 7.01421 15.9859 7.54199 15.4582C8.06977 14.9304 8.33366 14.2915 8.33366 13.5415V12.9165H13.5212C13.6323 12.7915 13.7642 12.6908 13.917 12.6144C14.0698 12.538 14.2225 12.4998 14.3753 12.4998C14.667 12.4998 14.9135 12.6005 15.1149 12.8019C15.3163 13.0033 15.417 13.2498 15.417 13.5415C15.417 13.8193 15.3163 14.0623 15.1149 14.2707C14.9135 14.479 14.667 14.5832 14.3753 14.5832C14.2225 14.5832 14.0698 14.545 13.917 14.4686C13.7642 14.3922 13.6323 14.2915 13.5212 14.1665H9.54199C9.34755 15.1248 8.88574 15.92 8.15658 16.5519C7.42741 17.1839 6.58366 17.4998 5.62533 17.4998ZM14.3753 17.4998C13.7087 17.4998 13.0941 17.3471 12.5316 17.0415C11.9691 16.7359 11.5073 16.3332 11.1462 15.8332H12.9378C13.1462 15.9721 13.3719 16.0762 13.6149 16.1457C13.858 16.2151 14.1114 16.2498 14.3753 16.2498C15.1253 16.2498 15.7642 15.9859 16.292 15.4582C16.8198 14.9304 17.0837 14.2915 17.0837 13.5415C17.0837 12.7915 16.8198 12.1526 16.292 11.6248C15.7642 11.0971 15.1253 10.8332 14.3753 10.8332C14.1114 10.8332 13.8684 10.8644 13.6462 10.9269C13.4239 10.9894 13.2087 11.0832 13.0003 11.2082L10.3128 6.6665C10.035 6.61095 9.80935 6.48942 9.63574 6.30192C9.46213 6.11442 9.37533 5.88873 9.37533 5.62484C9.37533 5.33317 9.47949 5.08664 9.68783 4.88525C9.89616 4.68386 10.1392 4.58317 10.417 4.58317C10.7087 4.58317 10.9552 4.68386 11.1566 4.88525C11.358 5.08664 11.4587 5.33317 11.4587 5.62484C11.4587 5.68039 11.4552 5.73248 11.4482 5.78109C11.4413 5.8297 11.4239 5.90261 11.3962 5.99984L13.542 9.6665C13.6948 9.63873 13.8441 9.61789 13.9899 9.604C14.1357 9.59011 14.2642 9.58317 14.3753 9.58317C15.4725 9.58317 16.4066 9.96859 17.1774 10.7394C17.9482 11.5103 18.3337 12.4443 18.3337 13.5415C18.3337 14.6248 17.9482 15.5554 17.1774 16.3332C16.4066 17.1109 15.4725 17.4998 14.3753 17.4998ZM5.62533 14.5832C5.34755 14.5832 5.10449 14.479 4.89616 14.2707C4.68783 14.0623 4.58366 13.8193 4.58366 13.5415C4.58366 13.2915 4.67046 13.0728 4.84408 12.8853C5.01769 12.6978 5.23644 12.5693 5.50033 12.4998L7.81283 8.604C7.39616 8.20123 7.0663 7.74636 6.82324 7.23942C6.58019 6.73248 6.45866 6.19428 6.45866 5.62484C6.45866 4.52761 6.84755 3.59359 7.62533 2.82275C8.4031 2.05192 9.33366 1.6665 10.417 1.6665C11.4725 1.6665 12.3823 2.03109 13.1462 2.76025C13.91 3.48942 14.3198 4.37484 14.3753 5.4165H13.1253C13.0837 4.70817 12.8024 4.11442 12.2816 3.63525C11.7607 3.15609 11.1392 2.9165 10.417 2.9165C9.66699 2.9165 9.0281 3.18039 8.50033 3.70817C7.97255 4.23595 7.70866 4.87484 7.70866 5.62484C7.70866 6.20817 7.8788 6.73248 8.21908 7.19775C8.55935 7.66303 8.99338 7.99289 9.52116 8.18734L6.58366 13.1457C6.61144 13.229 6.63227 13.3019 6.64616 13.3644C6.66005 13.4269 6.66699 13.4859 6.66699 13.5415C6.66699 13.8193 6.5663 14.0623 6.36491 14.2707C6.16352 14.479 5.91699 14.5832 5.62533 14.5832Z'
        fill='inherit'
      />
    </svg>
  );
};

export default RelatedIcon;
