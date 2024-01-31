import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input } from "@mantine/core";
import PostShare from "../../PostSide/PostShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Authentication"
        size="55%"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        <PostShare />
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </>
  );
}

export default ShareModal;
