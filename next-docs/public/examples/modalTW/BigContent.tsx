import React, { useState } from 'react';
import { Modal, Button } from '@heathmont/moon-core-tw';

const Example = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button onClick={openModal}>Open dialog</Button>
      <Modal open={isOpen} onClose={closeModal}>
        <Modal.Backdrop />
        <Modal.Panel>
          <div className="p-4 border-b-2 border-beerus">
            <h3 className="text-moon-18 text-bulma font-semibold">
              Payment successful
            </h3>
          </div>
          <div className="p-4">
            <p className="text-moon-sm text-trunks">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              blandit massa at lorem fermentum volutpat. Aliquam varius faucibus
              turpis, in facilisis dui dictum ac. Nulla ac consequat enim. Ut
              lobortis ultricies mauris eget volutpat. Aliquam aliquam nisl in
              nulla sagittis, eget viverra est ullamcorper. Morbi vel eros sed
              mauris dignissim congue et nec ligula. Duis quis tellus a est
              facilisis finibus. Duis varius libero id arcu pretium, et ultrices
              diam tincidunt. Aenean laoreet, velit at tempus eleifend, lectus
              turpis interdum ipsum, ac porta elit libero at arcu. Nam maximus
              magna vel orci pulvinar, et dignissim mi egestas. Pellentesque
              dapibus rhoncus ex, a finibus tortor sagittis quis. In nunc
              mauris, scelerisque vitae elit pulvinar, consequat accumsan leo.
              Proin varius maximus erat sed convallis. Aliquam convallis turpis
              turpis, eget euismod justo elementum at. Curabitur ligula velit,
              volutpat eget lacus sed, congue hendrerit turpis. Ut justo felis,
              ultricies et ornare quis, finibus ac lectus. Nam scelerisque felis
              nec massa convallis, eu ornare mauris posuere. Vivamus lacinia
              feugiat odio. Mauris cursus eu libero sit amet sollicitudin. Proin
              urna lectus, sodales nec ultricies ut, pharetra a mauris. Cras
              quis pharetra velit. Pellentesque magna erat, bibendum volutpat
              facilisis vitae, euismod in odio. Donec id sem vehicula, mollis
              eros porttitor, mattis sem. Etiam augue ligula, consectetur
              lobortis ullamcorper a, ullamcorper a lectus. Nullam non auctor
              quam. Morbi a lorem ut eros lobortis ultricies vitae sed lacus.
              Proin auctor vestibulum lorem a porttitor. Nunc ullamcorper leo
              risus. Integer tincidunt erat leo, ut lacinia est volutpat sit
              amet. Nulla laoreet molestie pharetra. Suspendisse sed magna erat.
              Fusce et orci orci. Suspendisse sit amet finibus mi. Integer
              fringilla venenatis dolor, porttitor bibendum lorem mattis et.
              Maecenas nisl nisl, finibus sed dolor vel, rhoncus euismod lorem.
              Maecenas sit amet gravida nunc. Praesent iaculis nunc elit, ut
              viverra nisl aliquam non. Donec eget ex velit. Pellentesque sed
              laoreet nunc. Morbi eget augue cursus, laoreet lorem in, tempus
              magna. Aliquam quis auctor nibh, id ornare sapien. Aenean sem
              magna, tempus a tempus in, lobortis vitae nisi. Mauris lobortis
              tellus sit amet elit maximus ornare. Sed interdum ac purus quis
              feugiat. Praesent nunc quam, gravida placerat dui eget, tempus
              pharetra urna. Maecenas eros augue, rutrum vitae maximus dictum,
              consectetur ut orci. Phasellus ut consequat urna. Morbi
              pellentesque sapien mauris, quis ornare diam ultricies eu.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Etiam tincidunt lacus purus, sit amet ultricies elit dapibus et.
              Vestibulum at velit eu mauris tincidunt lobortis quis sed leo.
              Vivamus non rhoncus massa, et bibendum ligula. Sed pulvinar,
              tortor eu faucibus vestibulum, nunc magna laoreet leo, ut
              elementum diam ipsum vitae purus. Vestibulum egestas sit amet elit
              egestas auctor. Mauris vestibulum ex at erat viverra ultricies.
              Suspendisse et nisi enim. Aenean ut velit sit amet diam aliquet
              molestie non quis urna. Praesent nec arcu non nisl maximus tempus
              in in ligula. Sed sodales eu elit facilisis tempus. Suspendisse
              viverra porta velit, mollis tempor purus aliquam id. Vestibulum
              sit amet vehicula dolor. Vestibulum orci nulla, sodales vitae
              euismod at, aliquam egestas sapien. Pellentesque et massa et
              lectus imperdiet ullamcorper. Integer sit amet semper nisl, sed
              suscipit eros. Nunc quis quam leo. Pellentesque porttitor, ex
              vitae ultrices interdum, sapien tellus dictum lectus, quis
              convallis elit felis vitae nulla. Nulla volutpat cursus urna, sed
              facilisis nisi consectetur sed. Praesent ac euismod odio. Mauris
              laoreet id ante vel finibus. Nulla nec egestas mi. Aenean leo
              lacus, imperdiet at lobortis nec, egestas ac mi. Praesent ut
              molestie est. Sed est dui, rhoncus eget semper id, egestas in
              sapien. Vestibulum aliquet, orci eget ultricies placerat, felis
              leo euismod enim, efficitur lacinia nulla ipsum non odio. Etiam id
              urna ut tortor egestas mattis. Nullam eget urna ac massa facilisis
              auctor nec at diam. Aliquam imperdiet, tortor non dignissim
              semper, eros sem congue lacus, a vehicula diam tellus ut ligula.
              Sed eget porta nibh, nec interdum urna. In tempor placerat massa,
              at imperdiet leo tincidunt eget. Vestibulum eu laoreet nisl, et
              gravida mauris. Aliquam erat volutpat. Vivamus elit diam,
              fringilla varius congue quis, dignissim non sapien. Curabitur a
              magna vitae risus tempus vulputate. Ut metus metus, iaculis in
              tincidunt ullamcorper, eleifend vitae mauris. Aliquam erat
              volutpat. Nunc eu nisi placerat, feugiat eros non, fringilla
              purus. Aliquam erat volutpat. Morbi sit amet imperdiet felis, sit
              amet dapibus lacus. Sed aliquam ipsum vitae ipsum maximus
              convallis. Donec quis nulla placerat, scelerisque tellus ut,
              ullamcorper sapien. Pellentesque enim lacus, ornare mollis nisl
              vitae, rutrum tincidunt mauris. Sed suscipit, augue in venenatis
              ultrices, augue nunc viverra turpis, eget ornare tellus lectus sit
              amet felis. In aliquam ullamcorper nulla sit amet tristique.
              Pellentesque odio ipsum, pulvinar sit amet est eget, maximus
              accumsan leo. Aenean consequat tellus vel pulvinar bibendum.
              Suspendisse finibus volutpat nisl, id dictum est feugiat sit amet.
              Pellentesque euismod lectus leo. Integer imperdiet nisi egestas
              quam posuere, mollis imperdiet odio tincidunt. Nam non quam leo.
              Vivamus vulputate metus sed velit laoreet euismod id et turpis.
              Vestibulum dictum ac turpis quis ultrices. Vivamus non semper
              nunc. Nullam vitae dignissim augue. Aliquam mollis nibh enim, sit
              amet accumsan est suscipit ac. Cras dignissim aliquet turpis id
              aliquet. Mauris erat magna, mattis ut ligula eu, ultricies
              interdum dolor. Cras nec congue mi, vitae faucibus nisi. Fusce
              tincidunt ultrices eleifend. Vestibulum sit amet porta lectus.
              Fusce dapibus tortor in lectus vehicula lobortis. Vestibulum ac
              felis congue, consectetur nunc sed, porttitor lorem. Maecenas non
              ultrices diam, non molestie neque. Donec metus odio, bibendum nec
              facilisis vel, mattis ut ex. Morbi luctus ex eu est tincidunt
              lacinia. Sed commodo eget neque eget aliquet. Phasellus tincidunt
              justo imperdiet nunc scelerisque, sit amet interdum lorem
              dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </div>
          <div className="p-4 border-t-2 border-beerus">
            <Button onClick={closeModal}>Got it, thanks!</Button>
          </div>
        </Modal.Panel>
      </Modal>
    </>
  );
};

export default Example;
