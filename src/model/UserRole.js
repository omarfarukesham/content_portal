const permissions = [
  'view_dashboard',
  'view_catalog',
  'view_product',
  'edit_product',
  'view_attribute',
  'edit_attribute',
  'view_tax',
  'edit_tax',
  'view_brand',
  'edit_brand',
  'view_content',
  'edit_content',
];

class UserRole {
  constructor(data) {
    this.name = data.name;
    this.appMenu = data.appMenu;
    this.permissions = permissions;
  }
}

export default UserRole;
