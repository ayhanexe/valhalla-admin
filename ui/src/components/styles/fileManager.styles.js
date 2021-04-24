import styled from "styled-components";

const ListSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-list ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    />
  </svg>
);

const ArrowLeftSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-left ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
    />
  </svg>
);

const ArrowRightSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-chevron-right ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
    />
  </svg>
);

const RefreshSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-arrow-clockwise ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
    />
    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
  </svg>
);

const ArrowUpSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-arrow-up ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
    />
  </svg>
);

const FolderSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-folder-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z" />
  </svg>
);

const PlusSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-plus ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
);

const FileSVG = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`bi bi-file-earmark-fill ${props.className}`}
    viewBox="0 0 16 16"
  >
    <path d="M4 0h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm5.5 1.5v2a1 1 0 0 0 1 1h2l-3-3z" />
  </svg>
);

export const Container = styled.div`
  width: 100%;
  height: 100%;

  ${({ theme }) =>
    theme?.fileManagerApp ? { ...theme?.fileManagerApp } : null}

  border-radius: 10px;

  display: flex;
  flex-direction: column;

  overflow: hidden;

  position: relative;

  #tabs-container {
    left: ${(props) => `calc((${props.size.w}px / 100) * 15)`};
    .tab-item {
      width: ${(props) => `calc(${props.size.w}px / 5)`};
    }
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 90px;

  ${({ theme }) =>
    theme?.fileManagerApp?.header ? { ...theme?.fileManagerApp?.header } : null}

  display: flex;
  align-items: center;

  position: relative;
`;

export const SidebarIcon = styled(ListSVG)`
  width: 23px;
  height: 23px;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.sidebarIcon
      ? { ...theme?.fileManagerApp?.header?.sidebarIcon }
      : null}

  position: absolute;
  top: 10px;
  left: 1.3vw;

  opacity: 0.5;

  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`;

export const TabsContainer = styled.div`
  width: auto;
  height: 20px;

  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
`;

export const TabItem = styled.div`
  max-width: 150px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.5;

  ${({ theme }) =>
    theme?.fileManagerApp?.header?.tabs?.tabItem
      ? { ...theme?.fileManagerApp?.header?.tabs?.tabItem }
      : null}

  padding: 5px 0;
  margin: 0 5px;

  border-radius: 0 0 7px 7px;
  cursor: pointer;
  transition: opacity 0.3s ease-out;

  &.active {
    opacity: 1;
  }

  &:hover {
    opacity: 1;
  }
`;

const NewTabButtonBackground = styled.div`
  width: 20px;
  height: 15px;
  border-radius: 5px;

  ${({ theme }) =>
    theme?.fileManagerApp?.header?.tabs?.newTabButton
      ? { ...theme?.fileManagerApp?.header?.tabs?.newTabButton }
      : null}

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.5;

  transition: opacity 0.3s ease-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const NewTabButtonIcon = styled(PlusSVG)`
  width: 15px;
  height: 15px;

  ${({ theme }) =>
    theme?.fileManagerApp?.header?.tabs?.newTabButton?.icon
      ? { ...theme?.fileManagerApp?.header?.tabs?.newTabButton?.icon }
      : null}
`;

export const NewTabButton = (props) => (
  <NewTabButtonBackground>
    <NewTabButtonIcon></NewTabButtonIcon>
  </NewTabButtonBackground>
);

export const TabText = styled.span`
  font-size: 0.8em;
  font-weight: 500;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.tabs?.tabItem?.tabText
      ? { ...theme?.fileManagerApp?.header?.tabs?.tabItem?.tabText }
      : null}
`;

export const NavigatorButtonsContainer = styled.div`
  width: auto;
  height: auto;

  position: absolute;
  bottom: 10px;
  left: 10px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const PrevNavigateButtonBackground = styled.div`
  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.navigators?.prev
      ? { ...theme?.fileManagerApp?.header?.navigators?.prev }
      : null}

  border-radius: 50%;

  margin: 0 2px;

  cursor: pointer;
`;

const NextNavigateButtonBackground = styled.div`
  width: 25px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.navigators?.next
      ? { ...theme?.fileManagerApp?.header?.navigators?.next }
      : null}

  border-radius: 50%;

  opacity: 0.5;
  margin: 0 2px;

  cursor: pointer;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }
`;

const PrevNavigateIcon = styled(ArrowLeftSVG)`
  width: 15px;
  height: 15px;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.navigators?.prev?.icon
      ? { ...theme?.fileManagerApp?.header?.navigators?.prev?.icon }
      : null}

  margin: 0 1px 0 0;
`;
const NextNavigateIcon = styled(ArrowRightSVG)`
  width: 15px;
  height: 15px;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.navigators?.prev?.icon
      ? { ...theme?.fileManagerApp?.header?.navigators?.prev?.icon }
      : null}

  margin: 0 0 0 1px;
`;

export const PrevNavigateButton = (props) => (
  <PrevNavigateButtonBackground>
    <PrevNavigateIcon />
  </PrevNavigateButtonBackground>
);

export const NextNavigateButton = (props) => (
  <NextNavigateButtonBackground>
    <NextNavigateIcon />
  </NextNavigateButtonBackground>
);

export const BreadcrumbContainer = styled.div`
  width: auto;
  height: 40px;

  padding: 0 10px;

  display: flex;
  align-items: center;

  position: absolute;
  bottom: 5px;
  left: 100px;
`;

export const BreadcrumbRefreshButton = styled(RefreshSVG)`
  width: 17px;
  height: 17px;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.refreshIcon
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.refreshIcon }
      : null}

  margin: 0 5px;

  opacity: 0.5;
  transition: opacity 0.3s ease-out, transform 0.2s ease-out;

  &:hover {
    opacity: 1;
    transform: rotateZ(90deg);
  }

  cursor: pointer;
`;

export const BreadcrumbPreviousNavigate = styled(ArrowUpSVG)`
  width: 17px;
  height: 17px;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.prev
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.prev }
      : null}

  margin: 0 5px;

  opacity: 0.5;
  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`;

const BreadcrumbHistoryButtonCSS = styled.div`
  width: 30px;
  height: 17px;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.history
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.history }
      : null}

  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0.5;

  padding: 0 0 1px 0;
  margin: 0 0 0 15px;

  cursor: pointer;

  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }
`;

export const BreadcrumbHistoryButtonDotts = styled.div`
  width: 2px;
  height: 2px;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.history?.dotts
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.history?.dotts }
      : null}

  position: relative;

  border-radius: 50%;

  &::before {
    content: "";
    width: 2px;
    height: 2px;
    ${({ theme }) =>
      theme?.fileManagerApp?.header?.breadcrumb?.history?.dotts
        ? { ...theme?.fileManagerApp?.header?.breadcrumb?.history?.dotts }
        : null}

    border-radius: 50%;

    position: absolute;
    top: 0;
    left: -9px;
  }

  &::after {
    content: "";
    width: 2px;
    height: 2px;
    ${({ theme }) =>
      theme?.fileManagerApp?.header?.breadcrumb?.history?.dotts
        ? { ...theme?.fileManagerApp?.header?.breadcrumb?.history?.dotts }
        : null}

    border-radius: 50%;

    position: absolute;
    top: 0;
    left: 9px;
  }
`;

export const BreadcrumbHistoryButton = (props) => (
  <BreadcrumbHistoryButtonCSS>
    <BreadcrumbHistoryButtonDotts />
  </BreadcrumbHistoryButtonCSS>
);

const BreadcrumbItemContainer = styled.div`
  height: 20px;
  font-size: 1vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

const BreadcrumbItemIcon = styled(ArrowRightSVG)`
  width: 1.2vw;
  height: 1.2vw;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.item
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.item }
      : null}

  margin: 0 5px 0 5px;

  opacity: 0.5;

  transition: opacity 0.3s ease-out;

  &:hover {
    opacity: 1;
  }

  cursor: pointer;
`;

const BreadcrumbEffectContainer = styled.div`
  padding: 2px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease-out;
  cursor: pointer;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.effectContainer
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.effectContainer }
      : null}

  &.deactive {
    opacity: 0.5 !important;
    pointer-events: none;
  }
`;

const BreadcrumbFolderIcon = styled(FolderSVG)`
  width: 1.4vw;
  height: 1.4vw;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.folder
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.folder }
      : null}

  margin: 0 5px 0 0;
`;

const BreadcrumbItemText = styled.span`
  font-size: 0.85em;
  ${({ theme }) =>
    theme?.fileManagerApp?.header?.breadcrumb?.item?.text
      ? { ...theme?.fileManagerApp?.header?.breadcrumb?.item?.text }
      : null}
`;

export const BreadcrumbItem = (props) => (
  <BreadcrumbItemContainer>
    <BreadcrumbItemIcon></BreadcrumbItemIcon>
    <BreadcrumbEffectContainer className={props.className}>
      <BreadcrumbFolderIcon />
      <BreadcrumbItemText>{props.children}</BreadcrumbItemText>
    </BreadcrumbEffectContainer>
  </BreadcrumbItemContainer>
);

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  display: flex;
`;

export const Sidebar = styled.div`
  width: 250px;
  height: 100%;
  ${({ theme }) =>
    theme?.fileManagerApp?.sidebar
      ? { ...theme?.fileManagerApp?.sidebar }
      : null}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  background-color: purple;
`;

export const SidebarItemsGroup = styled.div`
  width: 100%;
  height: 100%;

  font-size: 0.85em;

  display: flex;
  flex-direction: column;
  ${({ theme }) =>
    theme?.fileManagerApp?.sidebar?.itemsGroup
      ? { ...theme?.fileManagerApp?.sidebar?.itemsGroup }
      : null}

  padding: 30px 10px 0 10px;

  overflow: auto;
`;

export const SidebarDropdown = styled.div`
  width: 100%;
  height: 30px;
  overflow: hidden;

  &.opened {
    height: auto;
    & > .sidebar-dropdown-header > .sidebar-item-dropdown-icon {
      transform: rotateZ(90deg);
    }
  }
`;
export const SidebarDropdownHeader = styled.div`
  width: 100%;
  height: 30px;
  flex: 0 0 30px;
  ${({ theme }) =>
    theme?.fileManagerApp?.sidebar?.dropdownHeader
      ? { ...theme?.fileManagerApp?.sidebar?.dropdownHeader }
      : null}

  display: flex;
  align-items: center;
  padding: 0 0 0 10px;

  border-radius: 5px;
  cursor: pointer;
`;
export const SidebarBaseDropdownWrapper = styled.div`
  width: 90%;
  height: auto;
  margin: 0 0 0 auto;
`;
export const SidebarDropdownContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 5px 0 0 0;

  display: flex;
  flex-direction: column;

  .sidebar-inner-dropdown-item,
  .sidebar-inner-dropdown {
    margin: 2px 0;
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
    .sidebar-inner-dropdown-header {
      ${({ theme }) =>
        theme?.fileManagerApp?.sidebar?.innerDropdown?.innerDropdownHeader
          ? {
              ...theme?.fileManagerApp?.sidebar?.innerDropdown
                ?.innerDropdownHeader,
            }
          : null}
    }
  }
`;
export const SidebarDropdownItem = styled.div`
  width: 100%;
  height: 30px;
  flex: 0 0 30px;
`;
export const SidebarInnerDropdown = styled.div`
  width: 100%;
  height: 30px;

  border-radius: 5px;
  padding: 0;
  overflow: hidden;
  ${({ theme }) =>
    theme?.fileManagerApp?.sidebar?.innerDropdown
      ? { ...theme?.fileManagerApp?.sidebar?.innerDropdown }
      : null}

  &.opened {
    & > .sidebar-inner-dropdown-header > .sidebar-item-dropdown-icon {
      transform: rotateZ(90deg);
    }

    padding: 5px;
    height: auto;
    .opened {
      padding: 0;
    }
  }
  * {
    &:nth-child(1) {
      margin-top: 0;
    }
    &:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
`;
export const SidebarInnerDropdownHeader = styled.div`
  width: 100%;
  height: 30px;
  flex: 0 0 30px;

  display: flex;
  align-items: center;
  padding: 0 0 0 10px;

  border-radius: 5px;
  cursor: pointer;
`;
export const SidebarInnerDropdownContainer = styled.div`
  width: 100%;
  height: auto;

  margin: 5px 0;
`;
export const SidebarInnerDropdownItem = styled.div`
  width: 100%;
  height: 30px;
  flex: 0 0 30px;

  border-radius: 5px;

  display: flex;
  align-items: center;
  padding: 0 0 0 10px;

  ${({ theme }) =>
    theme?.fileManagerApp?.sidebar?.innerDropdown.item
      ? { ...theme?.fileManagerApp?.sidebar?.innerDropdown.item }
      : null}
  cursor: pointer;
`;
export const SidebarItem = styled.div`
  width: 100%;
  height: 30px;

  margin: 5px 0;

  cursor: pointer;

  display: flex;
  align-items: center;
  padding: 0 0 0 10px;

  border-radius: 5px;
`;

export const SidebarItemHeaderText = styled.span`
  width: 100%;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const SidebarItemDropdownIcon = styled(ArrowRightSVG)`
  width: 12px;
  height: 12px;
  flex: 0 0 12px;
  ${({ theme }) =>
    theme?.fileManagerApp?.sidebar?.item?.dropdownIcon
      ? { ...theme?.fileManagerApp?.sidebar?.item?.dropdownIcon }
      : null}

  display: block;
  margin: 0 7px 0 0;

  &.open {
    transform: rotateZ(90deg);
  }
`;

export const SidebarItemDropdownFolderIcon = styled(FolderSVG)`
  width: 11px;
  height: 11px;
  flex: 0 0 11px;
  ${({ theme }) =>
    theme?.fileManagerApp?.sidebar?.item?.folderIcon
      ? { ...theme?.fileManagerApp?.sidebar?.item?.folderIcon }
      : null}

  display: block;
  margin: 0 10px 0 0;
`;

export const PathContentContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  padding: 5vw 20px 0 20px;

  position: relative;

  .file-item,
  .folder-item {
    width: ${(props) => `${Math.floor(props.size.w / 10)}px`};
    height: ${(props) => `${Math.floor(props.size.w / 10)}px`};
    .file-content-container,
    .folder-content-container {
      padding: ${(props) => `${Math.floor(props.size.w / 50)}px`};
    }
  }
`;

export const PathTitle = styled.h3`
  font-size: 2vw;
  position: absolute;
  top: 20px;
  left: 30px;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.pathTitle
      ? { ...theme?.fileManagerApp?.content?.pathTitle }
      : null}
`;

const FileContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  cursor: pointer;

  margin: 10px;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.fileItem
      ? { ...theme?.fileManagerApp?.content?.fileItem }
      : null}
`;

const FileContentContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.fileItem?.content
      ? { ...theme?.fileManagerApp?.content?.fileItem?.content }
      : null}

  border-radius: 10px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3s ease-out;
`;

const FileIcon = styled(FileSVG)`
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.fileItem?.content?.icon
      ? { ...theme?.fileManagerApp?.content?.fileItem?.content?.icon }
      : null}
`;

const FileType = styled.span`
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.fileItem?.content?.type
      ? { ...theme?.fileManagerApp?.content?.fileItem?.content?.type }
      : null}
  font-size: 1.2em;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const FileName = styled.span`
  width: 100%;
  display: block;
  text-align: center;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.fileItem?.content?.name
      ? { ...theme?.fileManagerApp?.content?.fileItem?.content?.name }
      : null}

  font-size: 0.85em;
  margin: 2px 0;
`;

export const PathFile = (props) => (
  <FileContainer
    onClick={props.onClick ?? null}
    className={`file-item ${props.className}`}
  >
    <FileContentContainer className="file-content-container">
      <FileType>{props.file?.filename.split(".").pop() || ""}</FileType>
      <FileIcon />
    </FileContentContainer>
    <FileName>
      {props.file?.filename.slice(
        0,
        -(props.file?.filename.split(".").pop().length + 1) ?? 0
      ) || ""}
    </FileName>
  </FileContainer>
);

const FolderContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px;
  cursor: pointer;

  ${({ theme }) =>
    theme?.fileManagerApp?.content?.folderItem
      ? { ...theme?.fileManagerApp?.content?.folderItem }
      : null}
`;

const FolderContentContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.folderItem?.content
      ? { ...theme?.fileManagerApp?.content?.folderItem?.content }
      : null}

  position: relative;

  border-radius: 10px;

  transition: background-color 0.3s ease-out;
`;
const FolderIcon = styled(FolderSVG)`
  width: 100%;
  height: 100%;
  flex: 0 0 100%;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.folderItem?.content?.icon
      ? { ...theme?.fileManagerApp?.content?.folderItem?.content?.icon }
      : null}
`;
const FolderName = styled.span`
  width: 100%;
  display: block;
  text-align: center;
  ${({ theme }) =>
    theme?.fileManagerApp?.content?.folderItem?.content?.name
      ? { ...theme?.fileManagerApp?.content?.folderItem?.content?.name }
      : null}

  font-size: 0.85em;
  margin: 2px 0;
`;

export const PathFolder = (props) => (
  <FolderContainer
    onClick={props.onClick ?? null}
    className={`folder-item ${props.className}`}
  >
    <FolderContentContainer className={"folder-content-container"}>
      <FolderIcon />
    </FolderContentContainer>
    <FolderName>{props?.folder?.name}</FolderName>
  </FolderContainer>
);
