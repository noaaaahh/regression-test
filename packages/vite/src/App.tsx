import { Button, Dialog, Tabs } from "@noah/vanilla";
import "@noah/vanilla/styles.css";

function App() {
  return (
    <>
      <Button>asdfasdf</Button>
      <Dialog>
        <Dialog.Trigger asChild>
          <Button>hihi</Button>
        </Dialog.Trigger>
        <Dialog.CombinedContent>
          <Dialog.Header>
            <Dialog.Title>다이얼로그입니다.</Dialog.Title>
          </Dialog.Header>
          <Dialog.Body>
            <Dialog.Description>
              기본 형태의 다이얼로그입니다.
            </Dialog.Description>
          </Dialog.Body>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button color="hint">닫기</Button>
            </Dialog.Close>
          </Dialog.Footer>
        </Dialog.CombinedContent>
      </Dialog>
      <Tabs.Root>
        <Tabs.List>
          <Tabs.Button value="1">1</Tabs.Button>
          <Tabs.Button value="2">2</Tabs.Button>
          <Tabs.Button value="3">3</Tabs.Button>
        </Tabs.List>
        <Tabs.Panel value="1">1</Tabs.Panel>
        <Tabs.Panel value="2">2</Tabs.Panel>
        <Tabs.Panel value="3">3</Tabs.Panel>
      </Tabs.Root>
    </>
  );
}

export default App;
