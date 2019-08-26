//
//  TableViewController.m
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 2019-08-21.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import "TableViewController.h"
#import "TableCellTableViewCell.h"
#import "RequestMaker.h"
@interface TableViewController () <UITableViewDataSource, UITableViewDelegate>
@property (nonatomic, strong) UITableView * tableView;
@property (nonatomic, strong) RequestMaker * requestMaker;
@property (nonatomic, strong) NSArray * response;
@end

@implementation TableViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.tableView = [[UITableView alloc] initWithFrame: self.view.frame];
  self.tableView.delegate = self;
  self.tableView.dataSource = self;
  [self.view addSubview:self.tableView];
  
  self.requestMaker = [RequestMaker new];
  [self.requestMaker call:^(NSArray * arr) { //weak!!
    self.response = arr;
    dispatch_async(dispatch_get_main_queue(), ^{
      [self.tableView reloadData];
    });
    
  }];
  
}

#pragma mark - Tableview delegates

- (NSInteger)tableView:(nonnull UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return self.response.count;
}

- (nonnull UITableViewCell *)tableView:(nonnull UITableView *)tableView cellForRowAtIndexPath:(nonnull NSIndexPath *)indexPath {
  static NSString *cellIdentifier = @"cell";
  TableCellTableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:cellIdentifier];
  if (cell == nil)
  {
    cell = [[[NSBundle mainBundle] loadNibNamed:@"TableCellTableViewCell" owner:self options:nil] objectAtIndex:0];
  }
  cell.name.text = [[self.response objectAtIndex:indexPath.row] valueForKey:@"first_name"];
  cell.surname.text = [[self.response objectAtIndex:indexPath.row] valueForKey:@"last_name"];
  return cell;
}

@end
