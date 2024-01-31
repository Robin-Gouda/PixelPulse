import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, Input } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
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
        <form className="infoForm">
          <h3>Your info</h3>

          <div>
            <input
              type="text"
              className="infoInput"
              name="FirstName"
              placeholder="First Name"
            />
            <input
              type="text"
              className="infoInput"
              name="LastName"
              placeholder="Last Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="Works at"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIN"
              placeholder="Lives In"
            />
            <input
              type="text"
              className="infoInput"
              name="Country"
              placeholder="Country"
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="RelationShip Status"
            />
          </div>

          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>

          <button className="button infoButton">Update</button>
        </form>
      </Modal>

      {/* <Button onClick={open}>Open modal</Button> */}
    </>
  );
}

export default ProfileModal;
