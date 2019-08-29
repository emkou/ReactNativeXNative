//
//  RequestMaker.h
//  ReactNativeXNative
//
//  Created by Emil Doychinov on 2019-08-26.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Person.h"

NS_ASSUME_NONNULL_BEGIN

@interface RequestMaker : NSObject
-(void)fetchData:(void (^)(NSArray<Person *> *))callback;
@end

NS_ASSUME_NONNULL_END
