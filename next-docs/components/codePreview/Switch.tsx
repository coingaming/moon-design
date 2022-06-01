import { Button as CopyButton } from '@heathmont/moon-core-tw';
import { FilesCopy } from '@heathmont/moon-icons';
import classNames from '../../utils/classNames';

const Button: React.FC<{ isActive: boolean; onClick: () => void }> = ({
  children,
  isActive,
  ...rest
}) => (
  <button
    className={classNames(
      'group',
      isActive ? 'text-gray-900 bg-white' : 'text-gray-600 ',
      'group transition-colors flex-inline rounded-md p-1.5 lg:pl-2.5 lg:pr-3.5 rounded-md flex items-center text-sm font-medium shadow-sm'
    )}
    {...rest}
  >
    {children}
  </button>
);

interface PreviewSwitchProps {
  isPreviewActive: boolean;
  setPreviewActive: () => void;
  setCodeActive: () => void;
  copyCode: () => void;
}

export default function PreviewSwitch({
  isPreviewActive,
  setPreviewActive,
  setCodeActive,
  copyCode,
}: PreviewSwitchProps) {
  return (
    <div className="flex flex-row">
      {!isPreviewActive && (
        <div className="mr-2">
          <CopyButton variant="secondary" iconOnly>
            <FilesCopy fontSize="2rem" />
          </CopyButton>
        </div>
      )}
      <div className="p-0.5 rounded-lg flex bg-gray-300">
        <Button isActive={isPreviewActive} onClick={setPreviewActive}>
          <>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.6826 12.2954C24.8959 12.4707 25.211 12.4399 25.3863 12.2265C25.5616 12.0131 25.5308 11.6981 25.3174 11.5228L24.6826 12.2954ZM6.68258 11.5228C6.46922 11.6981 6.43837 12.0131 6.61368 12.2265C6.78898 12.4399 7.10406 12.4707 7.31742 12.2954L6.68258 11.5228ZM23.8077 17.7045C23.8077 17.737 23.7869 17.8551 23.6816 18.0733C23.5829 18.2776 23.4305 18.5282 23.2241 18.8101C22.8121 19.3732 22.2071 20.0314 21.4534 20.6581C19.9389 21.9173 17.8852 23 15.6538 23V24C18.2019 24 20.4751 22.772 22.0927 21.427C22.905 20.7517 23.5674 20.0344 24.0311 19.4007C24.2627 19.0843 24.4503 18.7812 24.5821 18.5081C24.7074 18.2487 24.8077 17.9656 24.8077 17.7045H23.8077ZM15.6538 23C13.4225 23 11.3688 21.9173 9.85432 20.6581C9.10058 20.0314 8.49563 19.3732 8.08355 18.8101C7.87723 18.5282 7.72476 18.2776 7.62607 18.0733C7.52075 17.8551 7.5 17.737 7.5 17.7045H6.5C6.5 17.9656 6.60033 18.2487 6.72556 18.5081C6.85742 18.7812 7.04498 19.0843 7.27657 19.4007C7.74031 20.0344 8.40269 20.7517 9.21499 21.427C10.8326 22.772 13.1058 24 15.6538 24V23ZM7.5 17.7045C7.5 17.6721 7.52075 17.5539 7.62607 17.3358C7.72476 17.1314 7.87723 16.8808 8.08355 16.5989C8.49563 16.0358 9.10058 15.3776 9.85432 14.7509C11.3688 13.4917 13.4225 12.4091 15.6538 12.4091V11.4091C13.1058 11.4091 10.8326 12.6371 9.21499 13.982C8.40269 14.6574 7.74031 15.3747 7.27657 16.0083C7.04498 16.3248 6.85742 16.6279 6.72556 16.9009C6.60033 17.1603 6.5 17.4434 6.5 17.7045H7.5ZM15.6538 12.4091C17.8852 12.4091 19.9389 13.4917 21.4534 14.7509C22.2071 15.3776 22.8121 16.0358 23.2241 16.5989C23.4305 16.8808 23.5829 17.1314 23.6816 17.3358C23.7869 17.5539 23.8077 17.6721 23.8077 17.7045H24.8077C24.8077 17.4434 24.7074 17.1603 24.5821 16.9009C24.4503 16.6279 24.2627 16.3248 24.0311 16.0083C23.5674 15.3747 22.905 14.6574 22.0927 13.982C20.4751 12.6371 18.2019 11.4091 15.6538 11.4091V12.4091ZM18.9616 15.6591C18.9616 17.4468 17.4879 18.9091 15.6539 18.9091V19.9091C18.0257 19.9091 19.9616 18.0134 19.9616 15.6591H18.9616ZM15.6539 18.9091C13.8199 18.9091 12.3462 17.4468 12.3462 15.6591H11.3462C11.3462 18.0134 13.282 19.9091 15.6539 19.9091V18.9091ZM12.3462 15.6591C12.3462 13.8713 13.8198 12.4091 15.6538 12.4091V11.4091C13.282 11.4091 11.3462 13.3047 11.3462 15.6591H12.3462ZM15.6538 12.4091C17.4879 12.4091 18.9616 13.8713 18.9616 15.6591H19.9616C19.9616 13.3047 18.0257 11.4091 15.6538 11.4091V12.4091ZM16 9C19.1548 9 22.1227 10.1921 24.6826 12.2954L25.3174 11.5228C22.6056 9.29461 19.419 8 16 8V9ZM7.31742 12.2954C9.87726 10.1921 12.8452 9 16 9V8C12.581 8 9.39442 9.29461 6.68258 11.5228L7.31742 12.2954Z"
                fill="currentColor"
              />
            </svg>

            <span className="sr-only lg:not-sr-only">Preview</span>
          </>
        </Button>
        <Button isActive={!isPreviewActive} onClick={setCodeActive}>
          <svg
            className="group-hover:text-gray-900"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6834 11.1262C11.8806 10.9329 11.8837 10.6163 11.6903 10.4191C11.4969 10.222 11.1804 10.2189 10.9832 10.4123L11.6834 11.1262ZM7.42787 14.5996L7.07777 14.2426L7.42787 14.5996ZM10.9832 21.5878C11.1804 21.7811 11.4969 21.778 11.6903 21.5809C11.8836 21.3838 11.8806 21.0672 11.6834 20.8738L10.9832 21.5878ZM7.42787 17.4004L7.07777 17.7574H7.07777L7.42787 17.4004ZM21.1441 10.5371C20.947 10.3438 20.6304 10.3468 20.437 10.544C20.2437 10.7411 20.2468 11.0577 20.4439 11.2511L21.1441 10.5371ZM24.5721 14.5996L24.9222 14.2426L24.5721 14.5996ZM20.4439 20.7489C20.2468 20.9423 20.2437 21.2588 20.437 21.456C20.6304 21.6531 20.947 21.6562 21.1441 21.4628L20.4439 20.7489ZM24.5721 17.4004L24.9222 17.7574L24.5721 17.4004ZM18.8943 7.63236C18.9674 7.36607 18.8107 7.09094 18.5444 7.01784C18.2782 6.94474 18.003 7.10135 17.9299 7.36764L18.8943 7.63236ZM13.2633 24.3676C13.1902 24.6339 13.3468 24.9091 13.6131 24.9822C13.8794 25.0553 14.1545 24.8986 14.2276 24.6324L13.2633 24.3676ZM10.9832 10.4123L7.07777 14.2426L7.77798 14.9566L11.6834 11.1262L10.9832 10.4123ZM11.6834 20.8738L7.77798 17.0435L7.07777 17.7574L10.9832 21.5878L11.6834 20.8738ZM7.07777 14.2426C6.08931 15.2121 6.08931 16.788 7.07777 17.7574L7.77798 17.0435C7.18924 16.4661 7.18924 15.534 7.77798 14.9566L7.07777 14.2426ZM20.4439 11.2511L24.222 14.9565L24.9222 14.2426L21.1441 10.5371L20.4439 11.2511ZM21.1441 21.4628L24.9222 17.7574L24.222 17.0434L20.4439 20.7489L21.1441 21.4628ZM24.222 14.9565C24.8107 15.5339 24.8107 16.466 24.222 17.0434L24.9222 17.7574C25.9107 16.7879 25.9107 15.212 24.9222 14.2426L24.222 14.9565ZM17.9299 7.36764L13.2633 24.3676L14.2276 24.6324L18.8943 7.63236L17.9299 7.36764Z"
              fill="currentColor"
            />
          </svg>
          <span className="sr-only lg:not-sr-only group-hover:text-gray-900">
            Code
          </span>
        </Button>
      </div>
    </div>
  );
}
