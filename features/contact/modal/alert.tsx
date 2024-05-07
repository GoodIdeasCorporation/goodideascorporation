import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

type AlertModalType = {
     isOpen : boolean
     onOpen : any 
     onOpenChange :any
}

const AlertModal: React.FC <AlertModalType> = ({isOpen , onOpen , onOpenChange}) =>{
  return (
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Contact US</ModalHeader>
              <ModalBody>
                    Send your Email and information already Thank you.
              </ModalBody>
              <ModalFooter>
                <Button color="primary" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
  );
}

export default AlertModal
