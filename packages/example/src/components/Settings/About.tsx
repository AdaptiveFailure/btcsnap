import { Modal } from 'semantic-ui-react';
import { TransitionablePortal } from 'semantic-ui-react';
import CloseIcon from '../Icons/CloseIcon';

import {
  ModalHeader,
  ModalHeaderContainer,
  ModalHeaderLabel,
  MaskArea,
  AboutBitcoinSnapContainer
} from './styles';

interface ConnectProps {
  open: boolean;
  close: () => void;
}

const AboutBitcoinSnap = (({ open, close }: ConnectProps) => {

  return (
    <TransitionablePortal
      open={open}
      transition={{ animation: 'fade up', duration: '300' }}
    >
      <Modal
        open
        style={{ width: '440px', height: '320px', marginTop: '370px', borderRadius: '20px' }}
      >
        <ModalHeader style={{ paddingLeft: 155 }}>
          <ModalHeaderContainer>
            <ModalHeaderLabel>About BitcoinSnap</ModalHeaderLabel>
          </ModalHeaderContainer>
          <CloseIcon onClick={close} />
        </ModalHeader>
        <AboutBitcoinSnapContainer>
          <p>BitcoinSnap is a program based off MetaMask Flask. Do note that Snaps are not currently supported in the official MetaMask release yet.</p>
          <p>BitcoinSnap is a web platform operated and developed by Yanssie HK Limited. Services include but not limited to, accessing any website or application on the platform, and any services offered through the BTCSnap platform.</p>
          <MaskArea />
        </AboutBitcoinSnapContainer>
      </Modal>
    </TransitionablePortal>
  );
});

export default AboutBitcoinSnap;
