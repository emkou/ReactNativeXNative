//
//  Person.h
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 8/26/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface Person : NSObject
@property (strong, nonatomic) NSString * firstName;
@property (strong, nonatomic) NSString * lastName;
- (instancetype) initWithDictionary: (NSDictionary *) dictionary;
@end

NS_ASSUME_NONNULL_END
