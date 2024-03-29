//
//  TableCellTableViewCell.h
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 2019-08-26.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface TableCellTableViewCell : UITableViewCell

@property (weak, nonatomic) IBOutlet UILabel *name;
@property (weak, nonatomic) IBOutlet UILabel *surname;

@end

NS_ASSUME_NONNULL_END
