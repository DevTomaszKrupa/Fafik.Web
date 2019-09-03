import React from 'react';
import Modal from 'react-modal';
import Select from 'react-select';

import components from './RsvpDialog.styles';
import { RomanticRsvpDialogState } from '../../../../../../store/romantic/dialogs/RsvpDialog/reducers';
import { Action } from '../../../../../../store/actions';

type Props = {
  romanticRsvpDialogState: RomanticRsvpDialogState;
  closeRsvpDialog: () => Action;
};

const customStyles = {
  content: {
    position: 'absolute',
    top: '18%',
    left: '15%',
    right: `auto`,
    bottom: `auto`,
    background: `rgb(255, 255, 255)`,
    overflow: `auto`,
    outline: `black`,
    width: `70%`,
    height: `70%`,
  }
};

const RsvpDialog = (props: Props) => {
  const {
    RsvpModalFrame,
    RsvpModal,
    TopOptionsSection,
    ClosingBox,
    ClosingIcon,
    RsvpText,
    RsvpTitle,
    RsvpSubtitle,
    RsvpDate,
    RsvpEmailBox,
    RsvpEmailRequest,
    RsvpEmailInput,
    RsvpListRequest,
    SingleFormToFill,
    NameInput,
    AgeListInput,
    DietListInput
  } = components;

  const DietOptions = [
    { value: 'Brak preferencji', label: 'Brak preferencji' },
    { value: 'Wegetariańska', label: 'Wegetariańska' },
    { value: 'Wegańska', label: 'Wegańska' },
    { value: 'Bezglutenowa', label: 'Bezglutenowa' },
  ];

  const AgeOptions = [
    { value: 'Wybierz', label: 'Wybierz' },
    { value: 'Dziecko do lat 7', label: 'Dziecko do lat 7' },
    { value: 'Osoba do lat 17', label: 'Osoba do lat 17' },
    { value: 'Osoba dorosła', label: 'Osoba dorosła' },
  ];

  const { romanticRsvpDialogState, closeRsvpDialog } = props;
  const { isOpen } = romanticRsvpDialogState;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeRsvpDialog}
      style={customStyles} >

      <RsvpModal>
        <RsvpModalFrame>
          <TopOptionsSection>
            <ClosingBox>
              <ClosingIcon src="http://localhost/Fafik/gaja-i-stanislaw/close-button.svg" />
            </ClosingBox>
          </TopOptionsSection>
          <RsvpText>
            <RsvpTitle> FORMULARZ POTWIERDZENIA OBECNOŚCI </RsvpTitle>
            <RsvpSubtitle> Drodzy Goscie, deklarując swoja obecnosc potwierdzacie swoje przybycie na wesele.
  Bardzo prosimy o przemyslana odpowiedz i kontakt z nami w razie jakiejkolwiek zmiany.
              Po wypelnieniu formularza prosimy o klikniecie "zapisz" oraz potwierdzenie poprzez e-mail. </RsvpSubtitle>
          </RsvpText>

          <RsvpDate> Prosimy o potwierdzenie przybycia do dnia 21 maja 2020. </RsvpDate>

          <RsvpEmailBox>
            <RsvpEmailRequest> Twój e-mail: </RsvpEmailRequest>
            <RsvpEmailInput />
          </RsvpEmailBox>

          <RsvpListRequest> WPROWADŹ OSOBY: </RsvpListRequest>

          <SingleFormToFill>
            <NameInput placeholder="imię i nazwisko" />
            <AgeListInput placeholder="wiek"
            />
            <Select
              defaultValue={DietOptions[0]}
              options={DietOptions} />
          </SingleFormToFill>

        </RsvpModalFrame>
      </RsvpModal>
    </Modal>
  );
};
export default RsvpDialog;
