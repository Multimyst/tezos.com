/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import clsx from 'clsx';
import SkipToContent from '@theme/SkipToContent';
import AnnouncementBar from '@theme/AnnouncementBar';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';
import LayoutProviders from '@theme/LayoutProviders';
import LayoutHead from '@theme/LayoutHead';
import useKeyboardNavigation from '@theme/hooks/useKeyboardNavigation';
import ModalsWrapper from 'components/ModalsWrapper';
import './styles.css'

function Layout(props) {
  const {children, noFooter, wrapperClassName} = props;

  useKeyboardNavigation();

  return (
    <LayoutProviders>
      <LayoutHead {...props} />

      <SkipToContent />

      <ModalsWrapper>

      <AnnouncementBar />

      <Navbar />

      <div className={clsx('main-wrapper', wrapperClassName)}>{children}</div>

      {!noFooter && <Footer/>}

      </ModalsWrapper>
    </LayoutProviders>
  );
}

export default Layout;
