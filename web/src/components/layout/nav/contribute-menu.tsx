import * as React from 'react';
import classNames from 'classnames';
import { Localized } from '@fluent/react';

import { TextButton } from '../../ui/ui';
import { ChevronDown } from '../../ui/icons';
import { ContributeMenuContent } from './contribute-menu-content';

type ContributeMenuProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMobileMenu: boolean;
  toggleMobileMenuVisible: () => void;
  isContributionPageActive: boolean;
};

const ContributeMenu: React.FC<ContributeMenuProps> = ({
  showMenu,
  setShowMenu,
  showMobileMenu,
  toggleMobileMenuVisible,
  isContributionPageActive,
}) => {
  const handleMouseEnter = () => {
    if (!isContributionPageActive) {
      setShowMenu(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isContributionPageActive) {
      setShowMenu(false);
    }
  };

  return (
    <div
      className={classNames('contribute-menu', { active: showMenu })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="contribute-menu">
      <div className="contribute-btn-wrapper">
        <Localized id="contribute">
          <TextButton
            className="contribute-btn"
            onClick={toggleMobileMenuVisible}
          />
        </Localized>
        <ChevronDown
          className={classNames({ 'rotate-180': showMobileMenu })}
          onClick={toggleMobileMenuVisible}
        />
      </div>
      <div className="contribute-link-wrapper">
        <p className="nav-link-item">
          <Localized id="contribute" />
        </p>
        {!isContributionPageActive && (
          <ChevronDown className={classNames({ 'rotate-180': showMenu })} />
        )}
      </div>
      {showMobileMenu && (
        <div
          className="nav-menu-wrapper-mobile"
          data-testid="contribute-mobile-menu">
          <ContributeMenuContent />
        </div>
      )}
      <div className="nav-menu-wrapper" data-testid="nav-menu-wrapper">
        {isContributionPageActive && <span className="black-border" />}
        <div className="menu">
          <span className="blue-border" />
          <ContributeMenuContent className="menu-list" />
        </div>
      </div>
    </div>
  );
};

export default ContributeMenu;
