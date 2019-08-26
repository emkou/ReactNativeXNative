//
//  TableViewController.m
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 2019-08-21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "TableViewController.h"

@interface TableViewController () <UITableViewDataSource, UITableViewDelegate>
@property (nonatomic, strong) UITableView * tableView;
@end

@implementation TableViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.tableView.delegate = self;
  self.tableView.dataSource = self;
}

#pragma mark - Tableview delegates

- (NSInteger)tableView:(nonnull UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return 0;
}

- (nonnull UITableViewCell *)tableView:(nonnull UITableView *)tableView cellForRowAtIndexPath:(nonnull NSIndexPath *)indexPath {
  return [UITableViewCell new];
}

@end
