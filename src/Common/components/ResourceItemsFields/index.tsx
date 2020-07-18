import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import LabelWithInput from '../LabelWithInput';

import {
  FieldsContainer,
  AddResourceText,
  CreateButton,
} from './styledComponents';

interface Props {
  onAddResource: (
    name: string,
    resourceName: string,
    link: string,
    description: string
  ) => void;
}

@observer
class ResourceItemsFields extends Component<Props> {
  @observable name!: string;
  @observable resourceName!: string;
  @observable link!: string;
  @observable description!: string;

  constructor(props: Props) {
    super(props);
    this.init();
  }

  init = () => {
    this.name = '';
    this.resourceName = '';
    this.link = '';
    this.description = '';
  };

  handleClick = () => {
    const { onAddResource } = this.props;
    if (this.name && this.resourceName && this.link && this.description)
      onAddResource(this.name, this.resourceName, this.link, this.description);
  };

  handleNameInputChange = (value: string) => {
    this.name = value;
  };

  handleResourceNameInputChange = (value: string) => {
    this.resourceName = value;
  };

  handleLinkInputChange = (value: string) => {
    this.link = value;
  };

  handleDescriptionInputChange = (value: string) => {
    this.description = value;
  };

  render() {
    return (
      <FieldsContainer>
        <AddResourceText>Item Details</AddResourceText>
        <LabelWithInput
          labelText='Item Name'
          value={this.name}
          onChange={this.handleNameInputChange}
        />
        <LabelWithInput
          labelText='Resource Name'
          value={this.resourceName}
          onChange={this.handleResourceNameInputChange}
        />
        <LabelWithInput
          labelText='Link'
          value={this.link}
          onChange={this.handleLinkInputChange}
        />
        <LabelWithInput
          isTextArea={true}
          labelText='Description'
          value={this.description}
          onChange={this.handleDescriptionInputChange}
        />

        <CreateButton buttonText='create' onClick={this.handleClick} />
      </FieldsContainer>
    );
  }
}

export default ResourceItemsFields;
