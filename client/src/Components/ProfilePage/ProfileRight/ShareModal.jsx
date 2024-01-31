import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import PostShare from "../../PostSide/PostShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        // title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
        size="55%"
      >
        <PostShare />
      </Modal>
    </>
  );
}

export default ShareModal;
